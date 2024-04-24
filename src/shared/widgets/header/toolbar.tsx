"use client"

import { Button } from "@nextui-org/react"
import { Link } from "framer"

const toolbar = () => {
  return (
    <>
      <Button color="primary" className="text-lg">
        Start Trial
      </Button>
      <Link href={"/sign-up"}>
        <Button color="success" className="text-lg">
          Login
        </Button>
      </Link>
    </>
  )
}

export default toolbar
