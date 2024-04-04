<?php

namespace App\Dto;

readonly class UserDto
{
  public function __construct(
    public string $name,
    public string $email,
    public ?string $password = null,
    public ?int $id = null,
  ) {
  }
}
