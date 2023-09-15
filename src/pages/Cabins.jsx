import Heading from "../ui/Heading";
import Row from "../ui/Row";
import {useEffect, useState} from "react";
import {getCabins} from "../services/apiCabins.js";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Button from "../ui/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";

function Cabins() {
    const [showForm, setShowForm] = useState(false);

    useEffect((function () {
        getCabins().then(data => console.log(data))
    }), [])

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>

            <Row>
                <CabinTable />
                <Button onClick={() => setShowForm(!showForm)}>{showForm ? 'Close' : 'Add new cabin'}</Button>
                {showForm && <CreateCabinForm />}
            </Row>
        </>
    );
}

export default Cabins;
