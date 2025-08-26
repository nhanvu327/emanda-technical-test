import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  findTrees() {
    const result = this.tasksService.findTrees();
    return this.tasksService.findTrees();
  }

  @Get(":id/subtasks")
  async findSubtasks(@Param("id") id: string) {
    return this.tasksService.findSubtasks(Number(id));
  }
}
