import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const ActivityList = observer(function () {
  const { activitiesGroup, isLoading, hasNextPage, fetchNextPage } =
    useActivities();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (!activitiesGroup) return <Typography>No activities found</Typography>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activitiesGroup.pages.map((activities, index) => (
        <Box
          key={index}
          ref={index === activitiesGroup.pages.length - 1 ? ref : null}
          display="flex"
          flexDirection="column"
          gap={3}
        >
          {activities.items.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </Box>
      ))}
    </Box>
  );
});

export default ActivityList;
