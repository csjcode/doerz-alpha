"use client"
import { useFetchTasks } from '@/hooks/useFetchTasks';
import React, { useEffect } from 'react'
import { DataTable } from '../../Tables/data-table';
import { columns } from '../../Tables/columns';
import TaskCardList from '../cards/TaskCardList';

type FetchTasksCardsClientProps = {}

const FetchTasksCardsClient = (props: FetchTasksCardsClientProps) => {
  const { tasks, error, fetchTasks } = useFetchTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const data = tasks || [];

  return (
    // <DataTable data={data} columns={columns} />
    <TaskCardList tasks={data} />
  )
}

export default FetchTasksCardsClient