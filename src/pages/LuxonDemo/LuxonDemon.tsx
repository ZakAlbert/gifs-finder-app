import React, { FC, useState } from 'react';
import { DateTime, Info } from 'luxon';


const LuxonDemo: FC = () => {

  const [luxonLocal, setLuxonLocal] = useState(DateTime.local().locale);
  const fecha = '10/09/2016';
  const luxonDate = DateTime.fromFormat(fecha, 'dd/MM/yyyy', { locale: luxonLocal });


  return <>
    <h1>Luxon Demo</h1>
    <div>
      <button onClick={() => setLuxonLocal('es-MX')}>Set es-MX Locale</button>
      <button onClick={() => setLuxonLocal('en-US')}>Set en-US Locale</button>
      <button onClick={() => setLuxonLocal('ja')}>Set ja Locale</button>
    </div>
    <Paragraph title="Default Settings Locale" text={DateTime.local().locale} />
    <Paragraph title="Settings Locale" text={luxonDate.locale} />
    <hr />
    <Paragraph title="Date" text={fecha} />
    <Paragraph title="SQL Date" text={luxonDate.toSQLDate()} />
    <Paragraph title="Locale" text={luxonDate.toLocaleString(DateTime.DATE_HUGE)} />
    <Paragraph title="Relative" text={luxonDate.toRelative()} />
    <Paragraph title="Relative Calender" text={luxonDate.toRelativeCalendar()} />
    <hr />
    <Paragraph title="Weekdays" text={Info.weekdays('long', { locale: luxonLocal }).join(',')} />
    <Paragraph title="Month" text={Info.monthsFormat('long', { locale: luxonLocal }).join(',')} />

  </>
}

const Paragraph: FC<{ title?: string, text?: string | undefined | null | object }> = ({ title = 'Title', text = 'text' }) => {
  return <p><strong>{title}:</strong> {text}</p>
}

export default LuxonDemo;
