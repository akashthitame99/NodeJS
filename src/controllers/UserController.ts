import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import { UserService } from "../services/UserService";

@Controller("/users")
export class UserController {
  constructor(readonly userService: UserService) {
  }

  @Get("/")
  async get() {
    const response = await this.userService.getAllUsers()
    return response
    //  ? new Ok(response) : new NotFound();
  }
}
