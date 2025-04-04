import { NativeStackScreenProps } from '@react-navigation/native-stack';


export type ParamList = {
    Landing: undefined;
    GetStarted: undefined;
    RoleSelection: undefined;
    VehicleOwnerSignUp: undefined;
    ServiceProviderSignUpStep1: undefined;
    Profile: { userId: string };
  };



export type ScreenProps<T extends keyof ParamList> = NativeStackScreenProps<ParamList, T>;
  


  