import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { useTranslation } from "react-i18next";

const Tech = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {Object.entries(
        t("Experience.Technologies", { returnObjects: true })
      ).map((technology) => (
        <div className="w-28 h-28" key={technology[1].name}>
          <BallCanvas icon={technology[1].icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");
