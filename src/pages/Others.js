



import { DataContext } from "../Context"
import { useContext } from "react"
import { Helmet } from 'react-helmet';
import Card from "./Card";

export default function Others() {

    const data = useContext(DataContext)
    
  
    return (
        <>
            <Helmet>
                <title>Hasindu | Others</title>
                <meta name="description" content="Hasindu Sithmin's others projects" />
            </Helmet>
            <div className="w3-content w3-section w3-padding">
                <div className="w3-center w3-padding-large">
                    <img className="w3-image" alt="Other" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/packer/packer-original.svg" width="150" height="150" />
                </div>
                {
                    data &&
                    data['Other'].map((description) => <Card key={Math.random()} description={description} />)
                }
            </div>
        </>
    )
}