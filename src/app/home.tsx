import { JSX, useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { RootState, useAppSelector } from "../store/store.ts";
import { useGetBreedsQuery } from "../services/catsService.ts";
import { CatModel } from "../../types/catModel.ts";
import { COLORS } from "../constants/colors.ts";
import CatsGrid from "../components/catsGrid.tsx";
import LapCatDistribution from "../components/lapCatDistribution.tsx";
import LifeSpanDistribution from "../components/lifeSpanDistribution.tsx";
import InOutChart from "../components/inOutChart.tsx";
import TopOrigins from "../components/topOrigins.tsx";
import AffectionLevels from "../components/affectionLevels.tsx";
import AdaptabilityChart from "../components/adaptabilityChart.tsx";
import { DataItem, LifeSpanData } from "../../types/dataItem.ts";

const HomePage = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const isAuthenticated: boolean = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const { data: cats = [], isLoading, error } = useGetBreedsQuery();

  const [adaptabilityData, setAdaptabilityData] = useState<DataItem[]>([]);
  const [affectionData, setAffectionData] = useState<DataItem[]>([]);
  const [originData, setOriginData] = useState<DataItem[]>([]);
  const [indoorData, setIndoorData] = useState<DataItem[]>([]);
  const [lapData, setLapData] = useState<DataItem[]>([]);
  const [lifeSpanData, setLifeSpanData] = useState<LifeSpanData[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!cats?.length) return;

    const stats = {
      adaptability: [] as { name: string; value: number }[],
      affection: [] as { name: string; value: number }[],
      originCount: {} as Record<string, number>,
      indoor: { indoor: 0, outdoor: 0 },
      lap: { lap: 0, notLap: 0 },
      lifeSpan: [] as { name: string; years: number }[],
    };

    cats.forEach((cat: CatModel) => {
      // Adaptability & Affection
      stats.adaptability.push({ name: cat.name, value: cat.adaptability });
      stats.affection.push({ name: cat.name, value: cat.affection_level });

      // Origins
      const origin = cat.origin || "Unknown";
      stats.originCount[origin] = (stats.originCount[origin] || 0) + 1;

      // Indoor vs Outdoor
      if (cat.indoor === 1) stats.indoor.indoor++;
      else stats.indoor.outdoor++;

      // Lap Cats
      if (cat.lap === 1) stats.lap.lap++;
      else stats.lap.notLap++;

      // Life Span
      const years = cat.life_span?.split(" - ").map((y) => parseInt(y.trim()));
      const avgLifeSpan =
        years && years.length === 2
          ? (years[0] + years[1]) / 2
          : parseInt(cat.life_span) || 0;
      stats.lifeSpan.push({ name: cat.name, years: avgLifeSpan });
    });

    // Top Origins
    const topOrigins = Object.entries(stats.originCount)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, COLORS.length);

    setAdaptabilityData(stats.adaptability);
    setAffectionData(stats.affection);
    setOriginData(topOrigins);
    setIndoorData([
      { name: "Indoor", value: stats.indoor.indoor },
      { name: "Outdoor", value: stats.indoor.outdoor },
    ]);
    setLapData([
      { name: "Lap Cat", value: stats.lap.lap },
      { name: "Not Lap Cat", value: stats.lap.notLap },
    ]);
    setLifeSpanData(stats.lifeSpan);
  }, [cats]);

  if (isLoading || error) {
    return (
      <div className="flex items-center justify-center h-screen">
        {isLoading ? (
          <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" />
        ) : (
          <div className="text-red-500">Error loading cats data</div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Cat Breeds Statistics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Adaptability Chart */}
        <AdaptabilityChart adaptabilityData={adaptabilityData} />

        {/* Affection Levels */}
        <AffectionLevels affectionData={affectionData} />

        {/* Top Origins */}
        <TopOrigins originData={originData} />

        {/* Indoor vs Outdoor Chart */}
        <InOutChart indoorData={indoorData} />

        {/* Lap Cat Distribution */}
        <LapCatDistribution lapData={lapData} />

        {/* Life Span Distribution */}
        <LifeSpanDistribution lifeSpanData={lifeSpanData} />
      </div>
      {/* Cats Grid */}
      <CatsGrid cats={cats} />
    </div>
  );
};

export default HomePage;
