import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}
