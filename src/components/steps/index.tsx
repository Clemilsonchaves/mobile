import { View, Text } from "react-native";
import { s } from "./styles";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

import { Step } from "../step";

export const Steps = () => { 
  return (
    <View style={s.container}>
      <Text style={s.text}>Veja como funciona:</Text>

      <Step 
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step 
        icon={IconQrcode}
        title="Ative o cupom com o QR Code"
        description="Escaneie o QR Code no estabelecimento para usar o benefício"
      />

      <Step  
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimentos."
      />
      
     
    </View>
  );
};