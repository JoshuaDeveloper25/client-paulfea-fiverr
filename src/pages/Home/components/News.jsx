import news1 from "../../../images/news1.png";
import news2 from "../../../images/news2.png";
import news3 from "../../../images/news3.png";
import { AiOutlineBars } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page px-3 my-16">
      <h3 className="text-center text-4xl">
        Latest{" "}
        <span className="font-bold text-secondary  animate-pulse">News</span>
      </h3>
      <p className="text-center text-gray-500 text-md mb-8">
        Lastest news, tips and best practices.
      </p>

      <div className="flex flex-wrap justify-center row-gap-3 gap-7">
        <div className="max-w-[23rem] shadow-lg rounded-sm">
          <img src={news1} className="rounded-sm" />
          <div className="px-4 py-6">
            <h3 className="text-md font-bold text-secondary text-[1rem] leading-5">
              Navigating the Landscape of KYC Vendors
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">
                  Category: <span className="text-black">Guides</span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              In recent years, the market has seen an influx of KYC vendors
              offering seemingly similar services, making the selection process
              challenging. KYC software vendors play an increasingly pivotal
              role in ensuring the secure operations of businesses across
              various industries. This guide is designed to furnish financial
              institutions and other services with a comprehensive KYC
              checklist, aiding in the identification of the most suitable KYC
              services tailored to their unique business needs.
            </p>
          </div>
        </div>

        <div className="max-w-[23rem] shadow-lg rounded-sm">
          <img src={news2} className="rounded-sm" />
          <div className="px-4 py-6">
            <h3 className="text-md font-bold text-secondary text-[1rem] leading-5">
              Navigating the Impact of FATF Recommendations in the 5th Mutual
              Evaluations
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">
                  Category: <span className="text-black">News</span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              The forthcoming initiation of the FATF's 5th Round of Mutual
              Evaluations in 2025 will exert considerable pressure on financial
              institutions to enhance their existing AML/CFT systems. This
              evaluation framework is devised by the FATF to assess the extent
              to which its recommendations have been implemented.
            </p>
          </div>
        </div>

        <div className="max-w-[23rem] shadow-lg rounded-sm">
          <img src={news3} className="rounded-sm" />
          <div className="px-4 py-6">
            <h3 className="text-md font-bold text-secondary text-[1rem] leading-5">
              Enhance Data Privacy Compliance with ComplyCube's PII Redaction
              Feature
            </h3>

            <div className="flex gap-3 my-2">
              <div className="flex items-center gap-2">
                <AiOutlineBars className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">
                  Category: <span className="text-black">Product</span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-xs text-gray-800" />
                <h3 className="text-gray-400 text-xs">10 Apr. 2024</h3>
              </div>
            </div>

            <p className="text-gray-500 text-[.8rem]">
              ComplyCube's latest innovation: PII Redaction, a robust solution
              addressing data privacy concerns with unparalleled efficiency.
              This feature adeptly obscures sensitive Personal Identifiable
              Information (PII) like the Dutch BSN, empowering businesses to
              comply with international data privacy regulations while
              maintaining optimal user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate(`/news`)}
          type="button"
          className="border bg-secondary text-white px-4 hover:bg-secondary/80 hover:text-white animation-fade my-3 rounded py-1"
        >
          Find More
        </button>
      </div>
    </section>
  );
};

export default News;
