import Pricing from "@/modules/home/features/Pricing"
import Banner from "@/modules/home/features/banner"
import Benefits from "@/modules/home/features/benefits"
import Branding from "@/modules/home/features/branding"
import FeatureHighlight from "@/modules/home/features/feature.highlight"
import Header from "@/shared/widgets/header/header"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
    </div>
  )
}

export default Home
