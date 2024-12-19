import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import { IconProps as TableIconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.8} 
      style={[s.container, style]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={colors.gray[100]} size="small" /> : children}
     
    </TouchableOpacity>
  );
}

function Title({ children }:  TextProps ) {
  return <Text style={s.title}>{children}</Text>;
}

type IconProps = TableIconProps & {
  icon: React.ComponentType<TableIconProps>;
}


function icon( { icon: Icon }: IconProps ) {
  return <Icon size={24}  color={colors.gray[100]}/>;
}

Button.Title = Title;
Button.Icon = icon; 

export { Button };  
