import React, { useState } from "react";
import { Route, Router, Text, ButtonGroup, Button, useText, Image, Notification, useRouter } from '@urban-bot/core';
import fs from "fs";
import logo from "./assets/logo.png";
import { Add, Help, Home, Test } from './routes';

const file = fs.readFileSync(logo);

export function App() {
  return (
    <>
      <Text>I have been restarted. Commands: /home /test /help /add</Text>
      <Router withInitializeCommands>
        <Route path="/home" description={'Main menu'}>
          <Home />
        </Route>
        <Route path="/test" description={'testing something'}>
          <Test />
        </Route>
        <Route path="/help" description="Get all commands">
          <Help />
        </Route>
        <Route path="/add" description='Add something to lists'>
          <Add />
        </Route>
      </Router>
    </>
  );
}
