import SupportList from '@/components/SupportList.js'
import { getIssues } from '@/hooks/useIssues';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Home() {

  return (
   <main>
    <SupportList
    issues= {getIssues().issues} >

    </SupportList>
    </main>
  );



}