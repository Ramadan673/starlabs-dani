import React from "react"
import Layout from "../components/layout"
import CarService from "../components/sporti"
import data from "../api/data.json"
import "../css/posts.css"
import SEO from "../components/seo";

class Sportet extends React.Component {
  state = {
    data: data,
    sortName: "",
  }

  render() {
    const sortBy = key => {
      this.setState({ sortName: key })
    }

    let filtSports = this.state.data.filter(sport => {
      return sport.sportCat
        .toUpperCase()
        .includes(this.state.sortName.toUpperCase())
    })
    return (
      <Layout>
        <SEO title="External" />
        <CarService filtereddata={filtSports} sortBy={sortBy} />
      </Layout>
    )
  }
}

export default Sportet
