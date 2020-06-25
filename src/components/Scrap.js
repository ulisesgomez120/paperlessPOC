import React, { Component } from "react";
import { workOrders, scrapTable } from "../data";
import Header from "../styledComponents/withProps/Header";
import ScrapForm from "../styledComponents/withProps/ScrapForm";
import ScrapTable from "../styledComponents/withProps/ScrapTable";

class Scrap extends Component {
  state = {
    formData: {
      selectedType: "A",
      spoolNum: 0,
      reason: "",
      weight: 0,
      operator: "",
    },
    scrapTableData: scrapTable,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name === "type" ? "selectedType" : target.name;
    const value = target.value;
    const stateCopy = { ...this.state.formData };
    stateCopy[name] = value;
    this.setState({
      formData: stateCopy,
    });
  };
  formHandler = (e) => {
    e.preventDefault();
    const scrapTableCopy = [...this.state.scrapTableData];
    scrapTableCopy.push(this.state.formData);
    this.setState({
      formData: {
        selectedType: "A",
        spoolNum: 0,
        reason: "",
        weight: 0,
        operator: "",
      },
      scrapTableData: scrapTableCopy,
    });
  };
  runData = workOrders.find(
    ({ work_order_id: id }) => id === this.props.match.params.slug
  );

  render() {
    return (
      <React.Fragment>
        <Header runData={this.runData} />
        <ScrapForm
          change={this.handleInputChange}
          formData={this.state.formData}
          submit={this.formHandler}
        />
        <ScrapTable tableData={this.state.scrapTableData} />
      </React.Fragment>
    );
  }
}

export default Scrap;
