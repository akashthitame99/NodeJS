import { Controller } from "@tsed/di";
import { Any, Get, Post } from "@tsed/schema";
import { UserService } from "../services/UserService";
import { BodyParams, QueryParams } from "@tsed/platform-params";
import { Auth } from "src/viewModels.ts/AuthViewModel";

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

  @Post("/login")
  // async login(@BodyParams() signInData: Auth) {
  async login(@QueryParams("username") username: string, @QueryParams("password") password: string) {
    console.log('BodyParams', username)
    // const response = await this.userService.signIn(signInData)
    return { username, password }

  }
}
