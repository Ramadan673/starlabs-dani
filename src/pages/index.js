import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Discover from "../components/discover";
import Dcard from "../components/dcard";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />

        <Discover/>
        <Dcard/>
    </Layout>
)

export default IndexPage
