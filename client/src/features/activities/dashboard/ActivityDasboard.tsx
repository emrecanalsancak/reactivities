import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

function ActivityDasboard() {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList />
      </Grid>

      <Grid size={5}>Activity filters.</Grid>
    </Grid>
  );
}

export default ActivityDasboard;
