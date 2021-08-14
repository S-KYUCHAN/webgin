import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import withListLoading from "../../Components/WithListLoading";
import axios from "axios";

const DetailHeader = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 20px;
`

const DetailView = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos</p>;
    return (
      <ul>
        <DetailHeader>{repos.title}</DetailHeader>        
        <div key={`containerKey ${repos.id}`}>
          <li key={`listKey ${repos.id}`} className='list' >
            <div key={`listTitle ${repos.id}`} className="list-title">{repos.title}</div>
            <div key={`listDesc ${repos.id}`} className="list-desc">{repos.desc}</div>
            <div key={`listCont ${repos.id}`} className="list-cont">{repos.content}</div>
          </li>
        </div>
      </ul >
    );
  };

export default function Detail() {
    let { id } = useParams();

    const ListLoading = withListLoading(DetailView);
    const [detailState, setDetailState] = useState({
      loading: false,
      repos: null,
    });
  
    useEffect(() => {
      setDetailState({ loading: true });
      const apiUrl = `/api/${id}`;
      
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setDetailState({ loading: false, repos: allRepos });
      }).catch((err) => console.log(err));
    }, [setDetailState, id]);
  
    return (
      <div className='Container'>
        <ListLoading isLoading={detailState.loading} repos={detailState.repos} />
      </div>
    )
  }