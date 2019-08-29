import { StyleSheet /*, Dimensions*/ } from "react-native";
/*const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
*/
const styles = StyleSheet.create({
  Screen: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  Container: {
    paddingVertical: 0.01,
    paddingHorizontal: 16
  },
  Panel: {
    paddingVertical: 0.01,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16
  },
  Image: { maxWidth: "100%", height: "auto" },
  Btn: {
    borderWidth: 0,
    display: "flex",
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: "hidden",
    alignContent: "center"
  },
  Button: {
    borderWidth: 0,
    display: "flex",
    paddingVertical: 8,
    paddingHorizontal: 16,
    overflow: "hidden",
    alignContent: "center"
  },
  BtnHover: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  Card: {
    borderColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 2
  },
  Circle: {
    borderRadius: 50
  },
  Section: {
    marginTop: 16,
    marginBottom: 16
  },
  Border: {
    borderWidth: 1,
    borderColor: /*solid*/ "#ccc"
  },
  Border0: {
    borderWidth: 0
  },
  BorderTop: {
    borderTopWidth: 1,
    borderTopColor: /*solid*/ "#ccc"
  },
  BorderRight: {
    borderRightWidth: 1,
    borderRightColor: /*solid*/ "#ccc"
  },
  BorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: /*solid*/ "#ccc"
  },
  BorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: /*solid*/ "#ccc"
  },
  TopBar: {
    borderTopWidth: 6,
    borderTopColor: /*solid*/ "#ccc"
  },
  RightBar: {
    borderRightWidth: 6,
    borderRightColor: /*solid*/ "#ccc"
  },
  LeftBar: {
    borderLeftWidth: 6,
    borderLeftColor: /*solid*/ "#ccc"
  },
  BottomBar: {
    borderBottomWidth: 6,
    borderBottomColor: /*solid*/ "#ccc"
  },
  Margin: {
    margin: 16
  },
  MarginTop: {
    marginTop: 16
  },
  MarginRight: {
    marginRight: 16
  },
  MarginLeft: {
    marginLeft: 16
  },
  MarginBottom: {
    marginBottom: 16
  },
  Opacity: { opacity: 0.6 },
  OpacityOff: { opacity: 1 },
  Tiny: {
    fontSize: 10
  },
  Small: {
    fontSize: 12
  },
  Medium: {
    fontSize: 15
  },
  Large: {
    fontSize: 18
  },
  XLarge: {
    fontSize: 24
  },
  XxLarge: {
    fontSize: 36
  },
  XxLarge: {
    fontSize: 36
  },
  XxxLarge: {
    fontSize: 48
  },
  Jumbo: {
    fontSize: 64
  },
  Padding: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  PaddingSmall: {
    paddingVertical: 4,
    paddingHorizontal: 8
  },

  PaddingLarge: {
    paddingVertical: 12,
    paddingHorizontal: 24
  },

  PaddingXLarge: {
    paddingVertical: 16,
    paddingHorizontal: 32
  },
  PaddingXxLarge: {
    paddingVertical: 24,
    paddingHorizontal: 48
  },
  PaddingXxxLarge: {
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  PaddingJumbo: {
    paddingVertical: 32,
    paddingHorizontal: 64
  },
  Padding16: {
    paddingVertical: 16
  },
  Padding32: {
    paddingVertical: 32
  },
  Padding48: {
    paddingVertical: 48
  },
  Padding64: {
    paddingVertical: 64
  },
  PaddingTop: {
    paddingTop: 16
  },
  PaddingRight: {
    paddingRight: 16
  },
  PaddingLeft: {
    paddingLeft: 16
  },
  PaddingBottom: {
    paddingBottom: 16
  },
  Transparent: {
    backgroundColor: "transparent"
  },
  Amber: {
    color: "#000",
    backgroundColor: "#ffc107"
  },
  Aqua: {
    color: "#000",
    backgroundColor: "#00ffff"
  },
  LightBlue: {
    color: "#000",
    backgroundColor: "#87CEEB"
  },
  Blue: {
    color: "#fff",
    backgroundColor: "#2196F3"
  },
  Brown: {
    color: "#fff",
    backgroundColor: "#795548"
  },
  Cyan: {
    color: "#000",
    backgroundColor: "#00bcd4"
  },
  BlueGrey: {
    color: "#fff",
    backgroundColor: "#607d8b"
  },
  Green: {
    color: "#fff",
    backgroundColor: "#4CAF50"
  },
  LightGreen: {
    color: "#000",
    backgroundColor: "#8bc34a"
  },
  Indigo: {
    color: "#fff",
    backgroundColor: "#3f51b5"
  },
  Khaki: {
    color: "#000",
    backgroundColor: "#f0e68c"
  },
  Lime: {
    color: "#000",
    backgroundColor: "#cddc39"
  },
  Orange: {
    color: "#000",
    backgroundColor: "#ff9800"
  },
  DeepOrange: {
    color: "#fff",
    backgroundColor: "#ff5722"
  },
  Pink: {
    color: "#fff",
    backgroundColor: "#e91e63"
  },
  Purple: {
    color: "#fff",
    backgroundColor: "#9c27b0"
  },
  DeepPurple: {
    color: "#fff",
    backgroundColor: "#673ab7"
  },
  Red: {
    color: "#fff",
    backgroundColor: "#f44336"
  },
  Sand: {
    color: "#000",
    backgroundColor: "#fdf5e6"
  },
  Teal: {
    color: "#fff",
    backgroundColor: "#009688"
  },
  Yellow: {
    color: "#000",
    backgroundColor: "#ffeb3b"
  },
  White: {
    color: "#000",
    backgroundColor: "#fff"
  },
  Black: {
    color: "#fff",
    backgroundColor: "#000"
  },
  Grey: {
    color: "#000",
    backgroundColor: "#9e9e9e"
  },
  Gray: {
    color: "#000",
    backgroundColor: "#9e9e9e"
  },
  LightGrey: {
    color: "#000",
    backgroundColor: "#f1f1f1"
  },
  LightGray: {
    color: "#000",
    backgroundColor: "#f1f1f1"
  },
  DarkGray: {
    color: "#fff",
    backgroundColor: "#616161"
  },
  DarkGrey: {
    color: "#fff",
    backgroundColor: "#616161"
  },
  PaleRed: {
    color: "#000",
    backgroundColor: "#ffdddd"
  },
  PaleGreen: {
    color: "#000",
    backgroundColor: "#ddffdd"
  },
  PaleYellow: {
    color: "#000",
    backgroundColor: "#ffffcc"
  },
  PaleBlue: {
    color: "#000",
    backgroundColor: "#ddffff"
  },
  TextAmber: {
    color: "#ffc107"
  },
  TextAqua: {
    color: "#00ffff"
  },
  TextBlue: {
    color: "#2196F3"
  },
  TextLightBlue: {
    color: "#87CEEB"
  },
  TextBrown: {
    color: "#795548"
  },
  TextCyan: {
    color: "#00bcd4"
  },
  TextBlueGrey: {
    color: "#607d8b"
  },
  TextBlueGray: {
    color: "#607d8b"
  },
  TextGreen: {
    color: "#4CAF50"
  },
  TextLightGreen: {
    color: "#8bc34a"
  },
  TextIndigo: {
    color: "#3f51b5"
  },
  TextKhaki: {
    color: "#b4aa50"
  },
  TextLime: {
    color: "#cddc39"
  },
  TextOrange: {
    color: "#ff9800"
  },
  TextDeepOrange: {
    color: "#ff5722"
  },
  TextPink: {
    color: "#e91e63"
  },
  TextPurple: {
    color: "#9c27b0"
  },
  TextDeepPurple: {
    color: "#673ab7"
  },
  TextRed: {
    color: "#f44336"
  },
  TextSand: {
    color: "#fdf5e6"
  },
  TextTeal: {
    color: "#009688"
  },
  TextYellow: {
    color: "#d2be0e"
  },
  TextWhite: {
    color: "#fff"
  },
  TextBlack: {
    color: "#000"
  },
  TextGray: {
    color: "#757575"
  },
  TextGrey: {
    color: "#757575"
  },
  TextLightGrey: {
    color: "#f1f1f1"
  },
  TextLightGray: {
    color: "#f1f1f1"
  },
  TextDarkGrey: {
    color: "#3a3a3a"
  },
  TextDarkGray: {
    color: "#3a3a3a"
  },
  BorderAqua: {
    borderColor: "#00ffff"
  },
  BorderBlue: {
    borderColor: "#2196F3"
  },
  BorderLightBlue: {
    borderColor: "#87CEEB"
  },
  BorderBrown: {
    borderColor: "#795548"
  },
  BorderCyan: {
    borderColor: "#00bcd4"
  },
  BorderBlueGrey: {
    borderColor: "#607d8b"
  },
  BorderBlueGray: {
    borderColor: "#607d8b"
  },
  BorderGreen: {
    borderColor: "#4CAF50"
  },
  BorderLightGreen: {
    borderColor: "#8bc34a"
  },
  BorderIndigo: {
    borderColor: "#3f51b5"
  },
  BorderKhaki: {
    borderColor: "#b4aa50"
  },
  BorderLime: {
    borderColor: "#cddc39"
  },
  BorderOrange: {
    borderColor: "#ff9800"
  },
  BorderDeepOrange: {
    borderColor: "#ff5722"
  },
  BorderPink: {
    borderColor: "#e91e63"
  },
  BorderPurple: {
    borderColor: "#9c27b0"
  },
  BorderDeepPurple: {
    borderColor: "#673ab7"
  },
  BorderRed: {
    borderColor: "#f44336"
  },
  BorderSand: {
    borderColor: "#fdf5e6"
  },
  BorderTeal: {
    borderColor: "#009688"
  },
  BorderYellow: {
    borderColor: "#d2be0e"
  },
  BorderWhite: {
    borderColor: "#fff"
  },
  BorderBlack: {
    borderColor: "#000"
  },
  BorderGray: {
    borderColor: "#757575"
  },
  BorderGrey: {
    borderColor: "#757575"
  },
  BorderLightGrey: {
    borderColor: "#f1f1f1"
  },
  BorderLightGray: {
    borderColor: "#f1f1f1"
  },
  BorderDarkGrey: {
    borderColor: "#3a3a3a"
  },
  BorderDarkGray: {
    borderColor: "#3a3a3a"
  },
  RoundSmall: {
    borderRadius: 2
  },
  Round: {
    borderRadius: 4
  },
  RoundMedium: {
    borderRadius: 4
  },
  RoundLarge: {
    borderRadius: 8
  },
  RoundXLarge: {
    borderRadius: 16
  },
  RoundXxLarge: {
    borderRadius: 32
  },
  RoundJumbo: {
    borderRadius: 64
  },
  Bold: {
    fontWeight: "bold"
  },
  Center: { justifyContent: "center", alignItems: "center" },
  RowColumn: {
    flex: 1,
    flexDirection: "column"
  },
  Row: {
    flex: 1,
    flexDirection: "row"
  },
  Half: {
    flex: 1,
    flexDirection: "column"
  },
  Third: {
    flex: 1,
    flexDirection: "column"
  },
  TwoThird: {
    flex: 2,
    flexDirection: "column"
  }
});
export default styles;
