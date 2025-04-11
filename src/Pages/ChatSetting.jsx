import React, { useState, useEffect } from "react";
import { Switch, Typography, Row, Col, Card } from "antd";

const { Title, Text } = Typography;

export default function ChatSetting() {
  const [isHindi, setIsHindi] = useState(false);
  const [isNarration,setIsNarration] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("chat_language");
    if (savedLanguage === "hindi") {
      setIsHindi(true);
    }
  }, []);

  // Handle language toggle
  const handleLanguage = (checked) => {
    setIsHindi(checked);
    localStorage.setItem("chat_language", checked ? "hindi" : "english");
  };
  // Handle auto narration toggle
  const handleNarration = (checked) => {
    setIsNarration(checked);
    localStorage.setItem("chat_narration", checked ? true : false);
  };

  return (
    <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <Card
        style={{ width: "100%", maxWidth: 600 }}
        title={<Title level={3} style={{ margin: 0, textAlign: "center" }}>Chat Settings</Title>}
        bordered={false}
      >
        {/* Language Toggle */}
        <Row justify="space-between" align="middle" style={{ marginBottom: "1rem" }}>
          <Col>
            <Text strong>Language</Text>
            <br />
            <Text type="secondary">Choose chat language</Text>
          </Col>
          <Col>
            <Switch
              checked={isHindi}
              onChange={handleLanguage}
              checkedChildren="Hindi"
              unCheckedChildren="English"
            />
          </Col>
        </Row>



        {/* Add auto narration settings here */}
        <Row justify="space-between" align="middle" style={{ marginBottom: "1rem" }}>
          <Col>
            <Text strong>Auto Narration</Text>
            <br />
            <Text type="secondary">Toggle auto narration</Text>
          </Col>
          <Col>
            <Switch 
            checked={isNarration}
            onChange={handleNarration}
            checkedChildren="On"
            unCheckedChildren="Off"
            />
          </Col>
        </Row>

        {/* Add more settings here */}
        <Row justify="space-between" align="middle" style={{ marginBottom: "1rem" }}>
          <Col>
            <Text strong>Dark Mode</Text>
            <br />
            <Text type="secondary">Toggle dark theme</Text>
          </Col>
          <Col>
            <Switch />
          </Col>
        </Row>

        
      </Card>
    </div>
  );
}
