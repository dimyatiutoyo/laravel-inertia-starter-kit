<?php

namespace App\Services;

use App\Dto\UserDto;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
  /**
   * Create a new class instance.
   */
  public function __construct()
  {
    //
  }

  public function store(UserDto $userDto): User
  {
    try {
      $user = new \App\Models\User();
      $user->name = $userDto->name;
      $user->email = $userDto->email;
      $user->password = Hash::make($userDto->password);
      $user->save();
      return $user;
    } catch (\Throwable $th) {
      throw $th;
    }
  }

  public function update(UserDto $userDto, User $user)
  {
    try {
      $user->update([
        'name' => $userDto->name,
        'email' => $userDto->email,
      ]);
      return $user;
    } catch (\Throwable $th) {
      throw $th;
    }
  }
}
