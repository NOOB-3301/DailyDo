import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <Stack
    //   screenOptions={{
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    //   }}>
    //   <Stack.Screen name="(tabs)" options={{ title: "ToDo App" }} />
    //   <Stack.Screen 
    //   name="tasks/[task]" 
    //   options={{
    //     title: "Task Details",}} 
    //   />
    // </Stack>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="tasks/[task]"
        options={{
          title: "Task Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
}
