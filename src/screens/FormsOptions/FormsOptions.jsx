import React from "react";
import { MainTimeBar } from "../../components/MainTimeBar";
import "./style.css";

export const FormsOptions = () => {
  return (
    <div className="forms-options">
      <div className="div">
        <div className="overlap">
          <MainTimeBar
            className="main-time-bar-instance"
            img="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-7.svg"
            vector="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-2.svg"
          />
          <MainTimeBar
            className="main-time-bar-2"
            elementPmClassName="design-component-instance-node"
            group="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/group-1865-1@2x.png"
            img="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-3.svg"
            vector="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-4.svg"
          />
        </div>
        <h1 className="welcome-demo">Welcome, Demo</h1>
        <div className="overlap-group">
          <div className="forms-button">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="ic-baseline" />
                  <div className="text-wrapper">forms</div>
                </div>
              </div>
              <img
                className="vector-2"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-6.svg"
              />
            </div>
          </div>
          <div className="profile">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-2">profile</div>
                </div>
              </div>
              <img
                className="group-2"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/group@2x.png"
              />
            </div>
          </div>
          <div className="total-count">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-3">total count</div>
                </div>
              </div>
              <img
                className="vector-3"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/vector-5.svg"
              />
            </div>
          </div>
          <div className="group-3">
            <div className="login-page">
              <div className="overlap-group-3">
                <div className="new-entry">New Entry</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-4">Edit</div>
                <div className="text-wrapper-4">Edit</div>
              </div>
            </div>
            <div className="group-4">
              <div className="overlap-group-3">
                <div className="back">Back</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-5">View</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="daco"
          alt="Daco"
          src="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/daco-5185090-1@2x.png"
        />
        <div className="group-5">
          <div className="text-wrapper-6">Log Out</div>
          <img
            className="material-symbols"
            alt="Material symbols"
            src="https://generation-sessions.s3.amazonaws.com/fde3a13e02480c98b8b0217bcdbe9fdb/img/material-symbols-power-rounded.svg"
          />
        </div>
      </div>
    </div>
  );
};
