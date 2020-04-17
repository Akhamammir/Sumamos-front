import React, { Component } from 'react';
import { Grommet, Grid, Box, Heading, Button as GButton, Text } from 'grommet';
import { Sidebar } from 'primereact/sidebar';
import { ipsumShort } from './../Models/Lorem';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './Landing.css';

export default class Landing extends Component {
  state = {
    visible: false,
  };
  title = 'Excepteur sint oeeaeeat cupidatat non proider';
  render() {
    return (
      <Grommet className='App' style={{ overflow: 'hidden' }}>
        <Sidebar
          visible={this.state.visible}
          onHide={(e) => this.setState({ visible: false })}
        >
          Content
        </Sidebar>
        <header className='App-header'>
          <Grid
            rows={['xxsmall', 'small', 'medium', 'large', 'medium', '250px']}
            columns={['10%', '3%', '1rf', '3%', '10%']}
            gap='small'
            areas={[
              { name: 'header', start: [0, 0], end: [4, 0] },
              { name: 'mainTitle', start: [0, 1], end: [4, 1] },
              { name: 'getStarted', start: [2, 2], end: [2, 2] },
              { name: 'navb', start: [0, 3], end: [0, 3] },
              { name: 'main', start: [2, 3], end: [2, 3] },
              { name: 'navf', start: [4, 2], end: [4, 2] },
              { name: 'Hero', start: [0, 4], end: [4, 4] },
              { name: 'footer', start: [2, 5], end: [2, 5] },
            ]}
          >
            <Box gridArea='header' alignContent='start' direction='row'>
              <Button
                icon='pi pi-align-left'
                onClick={(e) => this.setState({ visible: true })}
                className='mTitle topButton'
              />
              <Heading margin={{ left: '15px' }} alignSelf='start' level='1'>
                Sumamos
              </Heading>
            </Box>
            <Box gridArea='mainTitle' align='end' justify='center'>
            <br/><br/>
              <Heading
                textAlign='end'
                alignSelf='end'
                responsive
                color='white'
                level='4'
                margin={{
                  horizontal: 'medium',
                }}
              >
                Apoyos por contingencia covid-19
              </Heading>
              <Heading
                textAlign='end'
                alignSelf='end'
                responsive
                margin={{
                  horizontal: 'medium',
                }}
              >
              No es necesario exponerse, solicita, verifica <br/>y recibe tu apoyo hasta la puerta de tu casa

              </Heading>
            </Box>
            <Box gridArea='getStarted'>
              <GetStarted />
            </Box>
            <Box gridArea='navb' alignContent='center'>
              <Box direction='column' alignSelf='end' height='60%'>
                {this.state.step > 0 ? (
                  <Button
                    label='Anterior'
                    className='navBtnB'
                    onClick={(e) =>
                      this.setState({ step: this.state.step - 1 })
                    }
                  />
                ) : (
                  <span></span>
                )}
              </Box>
            </Box>
            <Box gridArea='main'>
              <MainContent />
            </Box>
            <Box
              gridArea='Hero'
              margin='none'
              className='unselect'
              align='start'
              justify='center'
            >
              <Hero />
            </Box>
            <Footer />

          </Grid>
        </header>
      </Grommet>
    );
  }
}

const Hero = () => {
  return (
    <Grid
      rows={['small', 'small']}
      columns={['1fr']}
      gap='small'
      areas={[{ name: 'content', start: [0, 0], end: [0, 0] }]}
      responsive
    >
      <Box responsive align='end' justify='center' gridArea='content'>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Heading
          className='unselect'
          textAlign='end'
          alignSelf='start'
          responsive
          margin={{
            horizontal: 'medium',
          }}
        >
          Maximiza el alcance de tu cooperación.
        </Heading>
        <br/>
        <Heading
          textAlign='start'
          alignSelf='start'
          className='unselect'
          responsive
          level='4'
          margin={{
            horizontal: 'medium',
          }}
        >
        <Text size='small'>
        La herramienta ideal para gestionar la logística de tus campañas de apoyos sociales.<br/><br/>
        Recibe, gestiona y distribuye tus apoyos sociales económicos o en especie con la metodología de sumamos.<br/><br/>
        Eficienta la operación y maximiza tus recursos humanos.<br/><br/>
        Ahorra recursos técnicos y agiliza los procesos internos.<br/><br/>
        Toma mejores decisiones.
        </Text>
        </Heading>
      </Box>
    </Grid>
  );
};
const GetStarted = () => {
  return (
    <Grid
      rows={['medium']}
      columns={['1fr']}
      gap='small'
      areas={[{ name: 'content', start: [0, 0], end: [0, 0] }]}
      responsive
    >
      <Box responsive align='end' justify='center' gridArea='content'>
        <GButton label='Comenzar' />
      </Box>
    </Grid>
  );
};
const MainContent = () => {
  return (
    <>
      <Heading alignSelf='center' level='2' margin='none'>
        SELECCIONA EL APOYO QUE CREES QUE PUEDAS NECESITAR
      </Heading>
      <Grid
        rows={['20px', 'auto', 'auto']}
        columns={['auto', '250px', '250px', '250px', '250px', 'auto']}
        gap={{ column: 'small', row: 'medium' }}
        areas={[
          { name: 'one', start: [1, 1], end: [1, 1] },
          { name: 'two', start: [2, 1], end: [2, 1] },
          { name: 'three', start: [3, 1], end: [3, 1] },
          { name: 'four', start: [4, 1], end: [4, 1] },
          { name: 'five', start: [1, 2], end: [2, 2] },
          { name: 'six', start: [3, 2], end: [4, 2] },
        ]}
      >
        <Box gridArea='one'>
          <Card title='Apoyo a micro y pequeñas empresas' className={'unselect'}>
            Brindar apoyo económico a los trabajadores cuyos ingresos se
            han visto afectados debido a la contingencia.
            <br/><br/><br/>
            <Button
              label='Seleccionar'
              className={'unselectbtn p-button-raised'}
            />
          </Card>
        </Box>
        <Box gridArea='two'>
          <Card title='Apoyo a productores de maíz' className={'unselect'}>
            Los y las productoras que se dedican a la producción de maíz que
             han sido afectados por la actual pandemia de COVID-19 tienen el apoyo del Gobierno del Estado.
            <Button
              label='Seleccionar'
              className={'unselectbtn p-button-raised'}
            />
          </Card>
        </Box>
        <Box gridArea='three'>
          <Card title='Apoyo a personas con autoempleo o empleos no formales' className={'unselect'}>
            Brindar apoyo económico a los trabajadores cuyos ingresos se han visto afectados debido a la contingencia.
            <br/><br/>
            <Button
              label='Seleccionar'
              className={'unselectbtn p-button-raised'}
            />
          </Card>
        </Box>
        <Box gridArea='four'>
          <Card title='Apoyo a mujeres' className={'unselect'}>
            Las trabajadoras del hogar representan un sector económico
            vulnerable por lo cual también se otorgará un apoyo para amas de
             casa afectadas por la contingencia de COVID-19.
             <br/><br/>
            <Button
              label='Seleccionar'
              className={'unselectbtn p-button-raised'}
            />
          </Card>
        </Box>
        <Box gridArea='five'>
          <Card title='Intuitiva herramienta de levantamiento de datos' className={'select'}>
          <Text size='small'>
          - Utiliza una potente herramienta de registro para generar tu base de datos.
          <br/>
          - Agiliza el proceso de levantamiento de datos y ahorra tiempo capturando y vaciando datos a mano
          </Text>
          <br/>
            <Button
              label='Seleccionar'
              className={'selectbtn p-button-raised'}
            />
          </Card>
        </Box>
        <Box gridArea='six'>
          <Card title='Poderosa herramienta de gestión de solicitudes' className={'select'}>
          <Text size='small'>
          Con nuestro poderoso backend podrás filtrar las solicitudes para poder:<br/>
          - Eficientar la operación y distribución de tus apoyos<br/>
          - Crear un seguimiento desde la solicitud hasta la entrega<br/>
          - Medir la efectividad y el tiempo de respuesta
          </Text>
          <br/>
            <Button
              label='Seleccionar'
              className={'selectbtn p-button-raised'}
            />
          </Card>
        </Box>
      </Grid>
    </>
  );
};
const Footer = () => {
  return (
    <Grid
      gridArea='footer'
      rows={['xsmall', '1fr', 'xxsmall']}
      columns={['1fr', '1fr', '1fr', '1fr']}
      // responsive='true'
      gap='xxsmall'
      areas={[
        { name: 'title-1', start: [0, 0], end: [0, 0] },
        { name: 'title-2', start: [1, 0], end: [1, 0] },
        { name: 'title-3', start: [2, 0], end: [2, 0] },
        { name: 'title-4', start: [3, 0], end: [3, 0] },
        { name: 'content-1', start: [0, 1], end: [0, 1] },
        { name: 'content-2', start: [1, 1], end: [1, 1] },
        { name: 'content-3', start: [2, 1], end: [2, 1] },
        { name: 'content-4', start: [3, 1], end: [3, 1] },
        { name: 'foo', start: [0, 2], end: [3, 2] },
      ]}
    >
      <Box gridArea='title-1' justify='end'>
        <Text weight='bold' size='medium'>
          CONTACTANOS
          </Text>
      </Box>
      <Box gridArea='title-2' justify='end'>
        <Text weight='bold' size='medium'>
          SERVISIO AL CLIENTE
        </Text>
      </Box>
      <Box gridArea='title-3' justify='end'>
        <Text weight='bold' size='medium'>
          INFORMACIÓN
        </Text>
      </Box>
      <Box gridArea='title-4' justify='end'>
        <Text weight='bold' size='medium'>
          SUBSCRIBETE A SUMEMOS VIA EMAIL
        </Text>
      </Box>
      <Box gridArea='content-1'>
        <Text size='small'>hola@paseusted.com.mx</Text>
        <Text size='small'>soporte@paseusted.com.mx</Text>
      </Box>
      <Box gridArea='content-2'>
        <Text size='xsmall'>
          SUMEMOS cuenta con un equipo de atención a clientes listo
          para resolver las respuestas que necesitas en tiempo y forma.
        </Text>
      </Box>
      <Box gridArea='content-3'>
        <Text size='xsmall'>
          Política de privacidad
        </Text>
      </Box>
      <Box gridArea='content-4'>
        <Text size='xsmall'>
          Recibe las últimas noticias acerca de la plataforma SUMEMOS
        </Text>
      </Box>
      <Box
        // align='center'
        gridArea='foo'
        // as='footer'
        direction='row'
        flex='false'
        gap='medium'
        justify='between'
        margin='none'
      >
        <Text textAlign='center' weight='bold' size='small'>
          Made by Pase Usted
        </Text>
        <Text textAlign='center' weight='bold' size='small'>
          Sumamos © 2020 Copyright
        </Text>
      </Box>
    </Grid>
  );
};
