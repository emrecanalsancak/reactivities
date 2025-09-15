import {
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
} from "@mui/material";

type Props = {
  activity: Activity;
};

function ActivityDetailsSidebar({ activity }: Props) {
  const following = true;

  return (
    <>
      <Paper
        sx={{
          textAlign: "center",
          border: "none",
          backgroundColor: "primary.main",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6">
          {activity.attendees.length === 1
            ? activity.attendees.length + " person going"
            : activity.attendees.length + " people going"}
        </Typography>
      </Paper>
      <Paper sx={{ padding: 2 }}>
        {activity.attendees.map((attendee) => (
          <Grid key={attendee.id} container alignItems="center">
            <Grid size={8}>
              <List sx={{ display: "flex", flexDirection: "column" }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={`${attendee.displayName} image`}
                      src={attendee.imageUrl}
                      sx={{ width: 75, height: 75, mr: 3 }}
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography variant="h6">{attendee.displayName}</Typography>
                    {following && (
                      <Typography variant="body2" color="orange">
                        Following
                      </Typography>
                    )}
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid
              size={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 1,
              }}
            >
              {activity.hostId === attendee.id && (
                <Chip
                  label="Host"
                  color="warning"
                  variant="filled"
                  sx={{ borderRadius: 2 }}
                />
              )}
            </Grid>
          </Grid>
        ))}
      </Paper>
    </>
  );
}

export default ActivityDetailsSidebar;
