import { Info, CalendarToday, Place } from "@mui/icons-material";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import { formatDate } from "../../../lib/util/util";

type Props = {
  activity: Activity;
};

function ActivityDetailsInfo({ activity }: Props) {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <Info color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{activity.description}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <CalendarToday color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{formatDate(activity.date)}</Typography>
        </Grid>
      </Grid>
      <Divider />

      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <Place color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>
            {activity.venue}, {activity.city}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ActivityDetailsInfo;
