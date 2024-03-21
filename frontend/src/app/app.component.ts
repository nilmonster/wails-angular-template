import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { Greet } from "../../wailsjs/go/main/App"
import { ReactiveFormsModule } from "@angular/forms"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "hello"

  links = [
    { title: "Explore the Docs", link: "https://angular.dev" },
    { title: "Learn with Tutorials", link: "https://angular.dev/tutorials" },
    { title: "CLI Docs", link: "https://angular.dev/tools/cli" },
    { title: "Angular Language Service", link: "https://angular.dev/tools/language-service" },
    { title: "Angular DevTools", link: "https://angular.dev/tools/devtools" },
  ]

  onChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value
    this.setTitle(newValue)
  }

  private setTitle(s: string) {
    this.title = s
  }

  public async handleSubmit() {
    try {
      const newTitle = await Greet(this.title)
      this.setTitle(newTitle)
    } catch (err) {
      console.error(err)
    }
  }
}
