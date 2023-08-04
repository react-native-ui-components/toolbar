import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Toolbar = ({ children }: PropsWithChildren) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: insets.bottom,
        backgroundColor: "gray"//todo use color module (systemGray6)
      }}
    >
      <View
        style={{
          flexDirection: "row",
          bottom: 0,
          left: 0,
          right: 0,
          height: 43,
          paddingHorizontal: 16,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: "gray",//todo use color module (systemGray1)
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {children}
      </View>
    </View>
  );
};
