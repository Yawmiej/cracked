#Learning Go

## Resources

- [Go Dev](https://go.dev/learn/)
- [Effective Go](https://go.dev/doc/effective_go)
- [A Tour of Go](https://tour.golang.org/)
- [Go Playground](http://play.golang.org/)
- [Go Documentation](https://pkg.go.dev/)
- [Learning Go: An Idiomatic Approach to Real-World Go Programming](https://www.oreilly.com/library/view/learning-go-an/9781492077203/)
- [Repo](https://github.com/learning-go-book)

## Plan

- [ ] Read the book
- [ ] Build 3 small projects, one CLI, two servers
- [ ] Learn Design Patterns
- [ ] Learn Testing
- [ ] Build a Medium/Big Project

## Notes

`go fmt` allow you to automatically format code
`go import` allow you to clean up imports (`go install golang.org/x/tools/cmd/goimports@latest`)
`go lint`
`go vet` find error that can't be catched by the compiler (e.g. incorrect arguments)
`golangci-lint` run multiple lint tools at once (`brew install golangci-lint`, `golangci-lint run`)

makefiles help you automate tasks (like automating build process)

### Literals

- Integer
- Float
- Rune - characters surrounded by single quotes
- String (Interpreted string literal and raw string literal)

** Single quotes and double quotes are not used interchangeably in Go. **
Go has integer types with different ranges.

- int8, int16, int32, int64
- uint8, uint16, uint32, uint64

- The result of an integer division is an integer, you need to cast the result to a float to keep the decimal part.
- Float cannot perform %, only int can.
- While Go lets you use == and != to compare floats, don’t do it. Due to the inexact
  nature of floats, two floating point values might not be equal when you think they
  should be. Instead, define a maximum allowed variance and see if the difference
  between two floats is less than that
