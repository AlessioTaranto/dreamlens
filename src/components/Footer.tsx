import React from 'react';
import { Stack, Text, Link } from '@fluentui/react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <Stack horizontalAlign="center" className="footer">
      <Text variant="small">
        © 2023 DreamLens. All rights reserved.
      </Text>
      <Text variant="small">
        <Link href="/terms">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link>
      </Text>
    </Stack>
  );
};

export default Footer;
