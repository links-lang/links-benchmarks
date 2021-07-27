# Links Benchmark Suite

This repository contains a collection of programs used to benchmark
various components of Links.

## Program configuration for CI

The Continuous Integration automatically typechecks all Links programs
present in this repository. If a program needs some specific
configuration options, e.g. enabling handlers, these can be set as
follows:

* For a single program (say "program.links"), create the file
  "program.comfig" in the same directory that will contain the Links
  configuation to run that program.

* For multiple programs in the same directory, you can also use a
  default config: "_default.config" - this is the fallback if there
  is no "program.config".

* If none of these are present, Links will run with the default
  configuration.


-----
[![Typecheck Links benchmark suite](https://github.com/links-lang/links-benchmarks/actions/workflows/default.yml/badge.svg?event=push)](https://github.com/links-lang/links-benchmarks/actions/workflows/default.yml)
