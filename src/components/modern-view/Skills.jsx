import { Chip } from "@mui/material"
import { SKILLS } from "./texts"

export default function Skills() {
    return (
        <div style={{ paddingTop: "30px" }}>
            {SKILLS.map((skill) =>
                <Chip style={{ color: "#ccc7d5", borderRadius: "0px", backgroundColor: "transparent", border: "1px solid #bc7fb8", marginRight: "15px" }} label={skill} variant="outlined" />
            )}
        </div>
    )
}