import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { BOOK_LINKS, CONTACT_DATA } from "./data/contactData";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      justifyContent="space-between"
      marginBottom="32px"
    >
      <Grid xs={12} sm={12} md={5} lg={4}>
        <Typography variant="h6" fontWeight={600}>
          {t("section.contact.address")}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          fontWeight={600}
          marginBottom="8px"
        >
          {CONTACT_DATA.ADDRESS}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          {t("section.contact.phone")}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          fontWeight={600}
          marginBottom="8px"
        >
          {CONTACT_DATA.PHONE}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          {t("section.contact.email")}
        </Typography>
        <Link
          href={`mailto:${CONTACT_DATA.EMAIL}`}
          underline="none"
          target="_blank"
          rel="noopener"
          marginBottom="8px"
          fontSize="20px"
          fontWeight={600}
        >
          {CONTACT_DATA.EMAIL}
        </Link>
      </Grid>
      <Grid xs={12} sm={12} md={5} lg={6}>
        <Typography variant="h6" fontWeight={600}>
          {t("section.contact.map")}
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0560703211836!2d0.1975436784568557!3d41.91315335650592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a77625951f8df1%3A0x7d02f4512c13c62b!2sC.%20de%20Lope%20de%20Vega%2C%206%2C%2022400%20Monz%C3%B3n%2C%20Huesca!5e0!3m2!1ses!2ses!4v1737822747178!5m2!1ses!2ses"
          width="100%"
          height="300px"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Venecia Ubication"
          id="map"
        ></iframe>
      </Grid>
      <Grid xs={12} sm={12} md={2} lg={2}>
        <Typography variant="h6" marginBottom="8px" fontWeight={600}>
          {t("section.contact.booking")}
        </Typography>
        <Box display="flex" flexDirection="column">
          <Link
            href={BOOK_LINKS.RACCON.url}
            underline="hover"
            target="_blank"
            rel="noopener"
            marginBottom="8px"
            fontSize="20px"
            fontWeight={600}
          >
            {BOOK_LINKS.RACCON.name}
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
