import React, { Component } from "react";
import "./LinkItem.css";

const baseUrl = process.env.baseUrl || "3.20.232.121:13306";
// const baseUrl = process.env.baseUrl || "Shortly.com";
// 이렇게 바꿔줘야 페이지에 http://Shortly.com/D16fd9 이런식으로 표시된다.
// 다만, 이러면 작동을 안함. 어딘가에서 손을 대야 한다.

// 서버의 app.js 를 참고했는데,
// 도메인을 사야 (위와 같이 ip로 나오지 않고) http://Shortly.com/D16fd9 방식으로 표현되는 것 같음..

class LinkItem extends Component {
  render() {
    const { title, url, code, visits } = this.props;

    return (
      <div className="link-item">
        <div className="">{title}</div>
        <div>{url}</div>
        <a
          href={`http://${baseUrl}/${code}`}
          target="_blank"
        >{`http://${baseUrl}/${code}`}</a>
        <div>{`${visits} Visits`}</div>
      </div>
    );
  }
}

export default LinkItem;
