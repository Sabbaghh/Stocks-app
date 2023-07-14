import Ionicons from "@expo/vector-icons/Ionicons";
interface IconProps {
  name: any ;
  color: string;
  size: number;
}
const Icon = (props: IconProps) => {
  return <Ionicons style={{ marginBottom: -3 }} {...props} />;
};
export default Icon;