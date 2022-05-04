import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import DetailsSeance from "../../components/detailsSeance/DetailsSeance";

export const EspaceSeance = () => {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  const seances = [
    {
      nom: "Musculation",
      date: "30/03/2022",
      periode: 8,
      objectif: "Jambes",
      Competences: "2 minutes",
      Statistiques: "10 bombes",
      Lieu: "Vicking Bardo",
    },
    {
      nom: "Yoga",
      date: "30/03/2022",
      periode: 5,
      objectif: "Respiration 2 minutes avec concentration totale",
      Competences: "respiration",
      Statistiques: "40 secondes",
      Lieu: "Menzah",
    },
  ];
  const result = seances.filter((seance) => seance.periode > 5);

  console.log(result);
  return (
    <div>
      {" "}
      {seances.map((seance) => (
        <ListGroup>
          <ListGroupItem>
            <div className="bold">Nombre de séance : {seances.length}</div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="bold">Nom de la séance: {seance.nom}</div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="bold">Date de la séance: {seance.date}</div>
          </ListGroupItem>
          <ListGroupItem>
            <div className="bold">Objectif: {seance.objectif}</div>
          </ListGroupItem>
          <Button color="primary" onClick={() => setButtonPopUp(true)}>
            Details
          </Button>
          <DetailsSeance trigger={buttonPopUp} setTrigger={setButtonPopUp}>
            {" "}
            <h3> my popup</h3>
          </DetailsSeance>
        </ListGroup>
      ))}
    </div>
  );
};
