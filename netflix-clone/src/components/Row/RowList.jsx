import React, { useEffect, useState } from "react";
import Row from "./Row";
//similar to instance
import requests from "../../utils/request";
function RowList() {
  return (
    <div>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isSmall={false}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isSmall={true} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovie}
        isSmall={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovie}
        isSmall={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovie}
        isSmall={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovie}
        isSmall={true}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isSmall={true}
      />
    </div>
  );
}

export default RowList;
