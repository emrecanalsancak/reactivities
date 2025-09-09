import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
};

function ActivityList({ activities, selectActivity }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((a) => (
        <ActivityCard key={a.id} activity={a} selectActivity={selectActivity} />
      ))}
    </Box>
  );
}

export default ActivityList;
