import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Text */}
        <div className="text-center xl:text-left">
          <span className="text-xl">DevOps Engineer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br /> <span className="text-accent">Anugrah Massey</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Bridging the gap between development & operations with automation, CI/CD, and cloud computing. Let’s make DevOps magic happen!
            </p>


            {/*   56.25       */}
        </div>
        {/* Photo */}
        <div>photo</div>
      </div>
    </div>
  </section>
  );
};

export default Home;