import * as React from "react";
import { useEffect } from 'react';
import { navigate } from "@reach/router";

export default () => {
  useEffect( () => {
    navigate( 'https://collecte.io/wati-by-night/fr' );
  }, [] );
  return null;
};

