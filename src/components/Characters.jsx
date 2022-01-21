import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Avatar, stepClasses } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";


export default function Characters() {
  const [page, setPage] = useState(40);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  console.log(isPreviousData);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    
    <Container maxWidth="sm">
        <img className="responsive" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" />
        <a href="https://github.com/abhinavthapa1998" target="_blank"><Avatar className="hover"sx={{ padding: "2vh",margin: "auto"}} alt="GitHub" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {data.results.map((character, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}><Character key={index} character={character} /></Grid>
        
            ))}
        
        </Grid>
        <div className="button">
                <Button variant="contained" size="large"
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
                >
                Previous
                </Button>
                <Button variant="contained" size="large" 
                onClick={() => setPage((old) => old + 1)}
                disabled={!data.info.next}
                >
                Next
                </Button>
        </div>
        
    </Container>
  );
}