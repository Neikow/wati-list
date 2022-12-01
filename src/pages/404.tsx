import * as React from "react";
import { useEffect } from 'react';
import { navigate } from "@reach/router";

export default () => {
  useEffect( () => {
    navigate( '/' );
  }, [] );
  return null;
};

