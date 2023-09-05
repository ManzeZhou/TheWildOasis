import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {useEffect} from "react";
import {getCabins} from "../services/apiCabins.js";
import logo from "../ui/Logo.jsx";

function Cabins() {

    useEffect((function () {
        getCabins().then(data => console.log(data))
    }), [])

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
        <img src="https://dewfqnmhekdvwpnbwdts.supabase.co/storage/v1/object/public/avatars/cabin-001.jpg" alt=""/>
    </Row>
  );
}

export default Cabins;
