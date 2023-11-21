import React from "react";
import styles from "./Appointments.module.css";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
function Appointments() {
  const initialState = {
    name: "",
    address: {
      city: "",
      street: "",
      neighborhood: "",
      houseNumber: "",
    },
    petName: "",
    petType: "",
    petAge: "",
    symptoms: "",
    preferredDate: "",
  };

  // Estado adicional para controlar a habilitação do botão de submissão
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Função para verificar se todos os campos estão preenchidos
  const checkIfFormIsValid = () => {
    const { city, street, neighborhood, houseNumber } = formData.address;
    return (
      formData.name &&
      city &&
      street &&
      neighborhood &&
      houseNumber &&
      formData.petName &&
      formData.petType &&
      formData.petAge &&
      formData.symptoms &&
      formData.preferredDate
    );
  };

  // Efeito para verificar a validade do formulário sempre que houver uma mudança nos dados do formulário

  // Estado para armazenar os valores do formulário
  const [formData, setFormData] = React.useState(initialState);

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (event) => {
    if (event.target.name in formData.address) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [event.target.name]: event.target.value,
        },
      });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  // Função para formatar a mensagem do WhatsApp
  const formatWhatsAppMessage = () => {
    return (
      `Olá, gostaria de agendar uma consulta.\n\n` +
      `Nome: ${formData.name}\n` +
      `Endereço: ${formData.address.city}, ${formData.address.street}, ${formData.address.neighborhood}, ${formData.address.houseNumber}\n` +
      `Nome do Pet: ${formData.petName}\n` +
      `Tipo do Pet: ${formData.petType}\n` +
      `Idade do Pet: ${formData.petAge}\n` +
      `Sintomas: ${formData.symptoms}\n` +
      `Data Preferida: ${formData.preferredDate}`
    );
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Formatar a mensagem do WhatsApp
    const message = formatWhatsAppMessage();
    const whatsappNumber = "+559";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir o WhatsApp
    window.open(whatsappURL, "_blank");
    setFormData(initialState);

    // Limpar os estados após o envio
    setFormData(initialState);
  };
  useEffect(() => {
    setIsSubmitDisabled(!checkIfFormIsValid());
  }, [formData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Agende uma consulta</p>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Seu Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/* Campos adicionais para endereço */}
          <TextField
            label="Cidade"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nome da Rua"
            name="street"
            value={formData.address.street}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Bairro"
            name="neighborhood"
            value={formData.address.neighborhood}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Número da Casa"
            name="houseNumber"
            value={formData.address.houseNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Nome do seu Pet"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Seu pet é um"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Cachorro">Cachorro</MenuItem>
            <MenuItem value="Gato">Gato</MenuItem>
            <MenuItem value="Coelho">Coelho</MenuItem>
            <MenuItem value="Hamster">Hamster</MenuItem>
          </TextField>
          <TextField
            label="Idade do Pet"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Sintomas"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            fullWidth
            multiline
            margin="normal"
          />
          <TextField
            type="date"
            label="Data de preferência para consulta"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ marginTop: "20px", fontSize: "2em", color: "#fff" }}
            disabled={isSubmitDisabled}
          >
            Marcar Consulta
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Appointments;
