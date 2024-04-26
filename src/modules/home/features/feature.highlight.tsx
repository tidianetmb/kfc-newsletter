import { Button } from "@nextui-org/button"
import Image from "next/image"

const FeatureHighlight = () => {
  return (
    <div className="w-full md:flex items-center bg-[#9399F4] py-5 text-center md:py-0 md:text-left md:min-h-[55vh]">
      <div className="w-full md:w-[50%]">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
          alt=""
          width={400}
          height={400}
          className="w-[85%] ml-5"
        />
      </div>
      <div className="md:w-[50%]">
        <h2 className="font-clashDisplay uppercase text-cyber-ink text-3xl md:text-5xl mx-auto mb-2 md:text-left">
          CREATE
        </h2>
        <br />
        <h3 className="text-cyber-ink text-xl md:text-3xl max-w-lg font-semibold">
          The most powerful editing and design tools for building your own SaaS.
        </h3>
        <br />
        <p className="text-cyber-ink text-xl md:text-2xl max-w-lg font-[400]">
          ⚠️Are you looking to create a SaaS as quickly ⚡️ as possible ?{" "}
          <br></br> 🤓 You're in the right place !
        </p>
        <br />
        <Button className="bg-white border-[2px] border-[#000] rounded text-2xl !p-7 !px-16">
          Start Building
        </Button>
      </div>
    </div>
  )
}

export default FeatureHighlight
